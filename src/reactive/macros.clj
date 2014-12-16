(ns reactive.macros)

(defmacro keep-going [& body]
  (concat (list 'go-loop []) body  (list '(recur))))


(defmacro sleep [milliseconds]
  (list '<! (list 'timeout milliseconds)))
