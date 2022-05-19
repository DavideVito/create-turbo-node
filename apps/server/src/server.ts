import { json, urlencoded } from "body-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { getGoogle, inviaEmail } from "ceia-utils"
import { getDisponibilita } from "controllo-disponibilita"

const a = 32

export const createServer = () => {
  const app = express();
  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .get("/message/:name", (req, res) => {
      return res.json({ message: `hello ${req.params.name}` });
    })
    .get("/google", async (req, res) => {

      const html = await getGoogle()

      return res.setHeader("content-type", "text/html").send({ html });

    }).get("/microsoft", async (req, res) => {

      const html = await getDisponibilita();

      return res.setHeader("content-type", "text/html").send({ html });

    })
    .get("/inviaemail", (req, res) => {

      const esito = inviaEmail();

      res.status(200).json({ esito });


    })
    .get("/healthz", (req, res) => {
      return res.json({ ok: true });
    });

  return app;
};
