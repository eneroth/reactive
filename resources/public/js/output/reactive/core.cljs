(ns reactive.core
  (:require [reactive.helper :refer [log listen get-element sleep]]
            [cljs.core.async :as async :refer [chan <! timeout]]
            [reagent.core :as reagent :refer [atom]]
            [clojure.string :as string]
            [reactive.plato :as plato]
            [cljs.reader :refer [read-string]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))



(defn greet
  [person-name]
  (log "Hello" person-name "!"))

(greet "visitor")

(def app-state (atom {:version 2
                      :collection {:kalle 8
                                   :ake 9}
                      :x 0
                      :y 0}))

; --- Plato
(def base-key "com.watercooler")

(js/console.log js/localStorage)
; --- Reactive


(defn coord-div
  []
  [:div {:id "coords"}
   (str (:x @app-state) " - " (:y @app-state))])


(defn extract-coords
  [mouse-event]
  [(.-clientX mouse-event)
   (.-clientY mouse-event)])

(defn constrain
  [[x y :as coords]]
  true)

(def mouse-channel (listen (get-element "test") "click"))
(def coords-channel (async/map< extract-coords mouse-channel))
(def constrained-channel (async/filter< constrain coords-channel))


(defn mouse-handler
  [[x y :as coords]]
  (let [pointer (get-element "coords")]
    (swap! app-state assoc :x x)
    (swap! app-state assoc :y y)
    (plato/put base-key @app-state)))

(go
 (loop
   []
   (mouse-handler (<! constrained-channel))
   (recur)))

(defn mountit []
  (reagent/render-component [coord-div]
                            (.-body js/document)))

(mountit)

(defn ^:export main [n]
  (plato/reset! base-key app-state))
