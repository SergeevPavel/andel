(ns figwheel.connect.build-app (:require [andel.core] [andel.dev] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/andel.core.mount-root (apply js/andel.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'andel.core/mount-root' is missing"))), :build-id "app", :websocket-url "ws://localhost:3449/figwheel-ws"})

