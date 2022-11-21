import React from "react"
import ReactDOM from "react-dom/client"
import Router from "./app/Router"
import "./styles/App.scss"
import "bootstrap"
import "./app/config"

ReactDOM
.createRoot(document.getElementById("root"))
.render(<Router />)