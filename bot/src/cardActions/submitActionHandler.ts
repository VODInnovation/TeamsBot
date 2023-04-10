import { AdaptiveCards } from "@microsoft/adaptivecards-tools";
import { TurnContext, InvokeResponse } from "botbuilder";
import { TeamsFxAdaptiveCardActionHandler, InvokeResponseFactory } from "@microsoft/teamsfx";
import { SubmitResponseData, SubmitActionData } from "../cardModels";

import submitResponseCard from "../adaptiveCards/submitActionResponse.json"

export class SubmitActionHandler implements TeamsFxAdaptiveCardActionHandler {
  
  triggerVerb = "submit";

  async handleActionInvoked(context: TurnContext, actionData: SubmitActionData): Promise<InvokeResponse> {
    
    console.log('result triggered')
    const submitResponseData: SubmitResponseData = {
      title: "Cleared Cache",
      actionData
    };

    const cardJson = AdaptiveCards.declare(submitResponseCard).render(submitResponseData);
    return InvokeResponseFactory.adaptiveCard(cardJson);

  }
}
