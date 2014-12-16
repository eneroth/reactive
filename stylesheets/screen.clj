(ns reactive.stylesheets.screen
  (:require [garden.def :refer [defstylesheet defstyles]]
            [garden.core :refer [css]]
            [garden.stylesheet :refer [at-media]]
            [garden.units :refer [px]]
            [garden.color :as color :refer [hsl rgb rgba]]))


(def standard-font "helvetica, arial, sans-serif")


;; Mixins
(def flex #{:flex
            :-webkit-flex
            :-moz-flex
            :-ms-flex
            :-o-flex})

(def inline-flex #{:inline-flex
                   :-webkit-inline-flex
                   :-moz-inline-flex
                   :-ms-inline-flex
                   :-o-inline-flex})


(def flex-grow #{:flex-grow
                 :-webkit-flex-grow
                 :-moz-flex-grow
                 :-ms-flex-grow
                 :-o-flex-grow})


;; Styles
(defstylesheet screen
  {:vendors ["webkit" "moz" "o" "ms"]
   :auto-prefix #{:border-radius}
   ;:output-to "resources/public/css/screen.css"
   }

  [:body
   {:background {:color "black"}}])
