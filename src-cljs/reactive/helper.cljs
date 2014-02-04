(ns reactive.helper
  (:require [cljs.core.async :refer [chan put! take! <! timeout]]
            [goog.events :as events]
            [goog.dom])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

;; Get an element by name or id
(defn get-element
  [element]
  (goog.dom/getElement element))

;; Log stuff to console
(defn log
  [& string-to-log]
  (js/console.log (apply str (interpose " " string-to-log))))

;; DOM listening as a channel
(defn listen [element type]
  "Create a channel that transmits an event every time
  it is triggered."
  (let [out (chan)]
    (events/listen element type
                   (fn [e] (put! out e)))
    out))

