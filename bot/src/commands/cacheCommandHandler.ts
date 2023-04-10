import { Activity, CardFactory, MessageFactory, TurnContext } from "botbuilder";
import { CommandMessage, TeamsFxBotCommandHandler, TriggerPatterns } from "@microsoft/teamsfx";
import { AdaptiveCards } from "@microsoft/adaptivecards-tools";
import cacheCard from "../adaptiveCards/cacheCommandResponse.json"
import { CacherData } from "../cardModels";


export class CacheCommandHandler implements TeamsFxBotCommandHandler {
  triggerPatterns: TriggerPatterns = "clearCache";

  async handleCommandReceived(
    context: TurnContext,
    message: CommandMessage
  ): Promise<string | Partial<Activity> | void> {
    console.log(`Bot received message: ${message.text}`);

    // Render your adaptive card for reply message
    const cacheData: CacherData = {
        "FormInfo": {
          "title": "CMS Cache Clear"
        },
        "Order": {
          "questions": [
            {
              "question": "Choose Asset Environment",
              "items": [
                {
                  "choice": "int1",
                  "value": "1"
                },
                {
                  "choice": "QC1",
                  "value": "2"
                },
                {
                  "choice": "dev1",
                  "value": "3"
                }
              ]
            },
            {
              "question": "Choose Asset Type?",
              "items": [
                {
                  "choice": "Module_A",
                  "value": "1"
                },
                {
                  "choice": "Module_B",
                  "value": "2"
                },
                {
                  "choice": "Module_C",
                  "value": "3"
                },
                {
                  "choice": "Module_D",
                  "value": "4"
                },
                {
                  "choice": "Module_E",
                  "value": "5"
                }
              ]
            },
            {
              "question": "Choose Asset Name ",
              "items": [
                {
                  "choice": "test",
                  "value": "1"
                },
                {
                  "choice": "dev",
                  "value": "2"
                }
              ]
            }
          ]
        }
      }
      

    const cardJson = AdaptiveCards.declare(cacheCard).render(cacheData);
    return MessageFactory.attachment(CardFactory.adaptiveCard(cardJson));
  }
}
