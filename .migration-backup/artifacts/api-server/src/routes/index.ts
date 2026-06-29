import { Router, type IRouter } from "express";
import healthRouter from "./health";
import mailerRouter from "./mailer";

const router: IRouter = Router();

router.use(healthRouter);
router.use(mailerRouter);

export default router;
