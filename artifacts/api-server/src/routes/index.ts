import { Router, type IRouter } from "express";
import healthRouter from "./health";
import receiptsRouter from "./receipts";
import policiesRouter from "./policies";
import dashboardRouter from "./dashboard";

const router: IRouter = Router();

router.use(healthRouter);
router.use(receiptsRouter);
router.use(policiesRouter);
router.use(dashboardRouter);

export default router;
