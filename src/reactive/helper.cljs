(ns reactive.helper
  (:require [cljs.core.async :refer [chan split map< put! take! <! timeout]]
            [goog.events :as events]
            [goog.dom])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

;; Get an element by name or id
(defn get-element
  [element-tag]
  (goog.dom/getElement (name element-tag)))

(defn get-element-by-id
  [element-id]
  (goog.dom/getElement element-id))

;; Query dom
(defn query-element
  [selector]
  (goog.dom/query selector))

;; Log stuff to console
(defn log
  ([one-thing]
   (js/console.log one-thing))
  ([one-thing & string-to-log]
   (js/console.log (str one-thing " " (apply str (interpose " " string-to-log))))))

(defn log-str
   [& others]
   (apply log (map str others)))

;; DOM listening as a channel
(defn listen [element event-type]
  "Create a channel that transmits an event every time
  it is triggered."
  (let [out (chan)]
    (events/listen element event-type
                   (fn [e] (put! out e)))
    out))

;; Type routing
(defn type-route [channel message-types]
  "Takes a channel and a vector of message types.
   Returns a map where each message type maps a
   channel. When a message of the proper type comes in
   it is routed to the corresponding channel. Messages
  lacking type, or of an unknown type ends up on channel
  :other."
  (loop [channel channel
         message-types message-types
         new-channels {}]
    (if (empty? message-types)
      (assoc new-channels :other channel)
      (let [the-type (first message-types)
            [new other] (split #(= (:type %) the-type) channel)
            new-content (map< :content new)]
        (recur other
                (rest message-types)
                (assoc new-channels the-type new-content))))))
