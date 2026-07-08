import { Router, type IRouter } from "express";
import { ListPoliciesResponse } from "@workspace/api-zod";
import { POLICY_RULES } from "../lib/store";

const router: IRouter = Router();

router.get("/policies", async (_req, res): Promise<void> => {
  res.json(ListPoliciesResponse.parse(POLICY_RULES));
});

export default router;
