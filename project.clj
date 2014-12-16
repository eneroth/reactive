(defproject reactive "0.1"
  :description "Testbed for interesting stuff"
  :url "http://www.eneroth.com"
  :license {:name "Fnord Actuator License"
            :url "http://uncyclopedia.wikia.com/wiki/License"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2411"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [reagent "0.5.0-alpha"]
                 [garden "1.2.5"]
                 [plato "0.1.12"]]
  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-garden "0.2.5"]]
  :source-paths ["src" "stylesheets"]
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src"]
                        :compiler {:output-to "resources/public/js/cljs.js"
                                   :optimizations :none
                                   :output-dir "resources/public/js/output"
                                   :pretty-print true
                                   :source-map "resources/public/js/output/cljs.js.map"}}
                       {:id "prod"
                        :source-paths ["src"]
                        :compiler {:output-to "resources/public/js/cljs.js"
                                   :optimizations :advanced
                                   :externs ["resources/public/js/react-0.12.1.min.js"]
                                   :pretty-print false}}]})
