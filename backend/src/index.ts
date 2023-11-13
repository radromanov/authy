import express from "express";
import { Application } from "./core/Application";
import { Config } from "./core/Config";

const app = new Application(express(), new Config());

app.setup();
app.start();
