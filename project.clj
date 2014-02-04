(defproject reactive "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2138"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [reagent "0.3.0"]]
  :plugins [[lein-cljsbuild "1.0.1"]]
  :cljsbuild {
              :builds [{:id "dev"
                        :source-paths ["src-cljs"]
                        :compiler {:output-to "resources/public/js/cljs.js"
                                   :optimizations :none
                                   :output-dir "resources/public/js/output"
                                   :pretty-print true
                                   :source-map "resources/public/js/output/cljs.js.map"}}
                       {:id "prod"
                        :source-paths ["src-cljs"]
                        :compiler {:output-to "resources/public/js/cljs.js"
                                   :optimizations :advanced
                                   :externs ["resources/public/js/react-0.8.0.min.js"]
                                   :pretty-print false}}]}

  :garden {:builds [{;; Optional name of the build.
                     :id "screen"
                     ;; The var containing your stylesheet.
                     :stylesheet client.stylesheets.screen/screen
                     ;; Compiler flags passed to `garden.core/css`
                     :compiler {;; Where to save the file.
                                :output-to "resources/public/css/screen.css"
                                ;; Compress the output?
                                :pretty-print? false}}]})
