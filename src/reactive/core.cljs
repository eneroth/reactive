(ns reactive.core
  (:require [reactive.helper :refer [log log-str listen get-element]]
            [cljs.core.async :as async :refer [chan map< <! timeout]]
            [reagent.core :as reagent :refer [render-component atom]]
            [clojure.string :as string]
            [plato.core :as plato]
            [cljs.reader :refer [read-string]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [reactive.macros :refer [sleep keep-going]]))

;; State
;; -------------------------------
(def app-state (atom {:coords {:x 0
                               :y 0}}))


;; Logic
;; -------------------------------
;; Put all mouse move events on a channel
(def mouse-channel (listen (get-element :body) "mousemove"))

(defn coords [event]
  "Takes a mouse move or click event,
   and extracts the coordinates from it, as a hash."
  {:x (.-clientX event)
   :y (.-clientY event)})

;; Transform all mousemove events to hashes
(def coords-channel (map< coords mouse-channel))


;; Whenever a coordinate arrives on coords-channel,
;; update the global state with the new coordinates.
(keep-going
  (let [{:keys [x y]} (<! coords-channel)]
    (swap! app-state assoc :coords {:x x :y y})))


;; UI
;; -------------------------------
;; Whenever the global state changes, the ui
;; will be re-rendered automatically.
(defn coords-div []
  (let [{:keys [x y]} (:coords @app-state)]
    [:div
     (str x " - " y)]))


;; Get things running
;; -------------------------------
(defn ^:export main [n]
  (def base-key "com.reactive")

  (plato/restore-atom! base-key app-state)
  (plato/keep-updated! base-key app-state false)

  ;(js/console.clear)
  (render-component [coords-div] (get-element :body)))
