using System.Collections.Generic;
using System.Threading.Tasks;
using Firebase.NET;
using Firebase.NET.Contracts;
using Firebase.NET.Messages;
using Firebase.NET.Notifications;

namespace FirebaseMessage
{
    public class FirebaseNotification
    {
        private const string ServerKey =
                "AAAAbuktpaU:APA91bHI8wIZ3bIBbM9z18_Hy-vzSAP9uwj_BpTyH896s3q80e3FB7jdMtL3deuz9uschqCZW3A85eHkOwrybD8r9W39ojwRSKS93LkAaVab1yfZEsbHJdw3_0ZT-qPal8naBgDwlgJs";

        private readonly PushNotificationService _pushService = new PushNotificationService(ServerKey);

        private readonly IPayload Data = new Payload()
        {
            {"leage", "UEFA"},
            {"game", "Albania vs Kosovo"},
            {"score", "1:1"}
        };

        public Task<IMessage> SendTopicNotification(string topic)
        {
            var requestMessage = new RequestMessage
            {
                Body =
                {
                    To = $"/topics/{topic}",
                    Notification = new CrossPlatformNotification
                    {
                        Title = "Important Notification",
                        Body = "This is a notification send from Firebase.NET"
                    },
                    Data = Data
                }
            };

            var responseMessage = _pushService.PushMessage(requestMessage);
            return responseMessage;
        }

        public Task<IMessage> SendNotification(string[] ids)
        {
            var data = new Dictionary<string, string>
            {
                {"leage", "UEFA"},
                {"game", "Albania vs Kosovo"},
                {"score", "1:1"}
            } as IPayload;

            var requestMessage = new RequestMessage
            {
                Body =
                {
                    RegistrationIds = ids,
                    Notification = new CrossPlatformNotification
                    {
                        Title = "Important Notification",
                        Body = "This is a notification send from Firebase.NET"
                    },
                    Data = data
                }
            };
            var responseMessage = _pushService.PushMessage(requestMessage);
            return responseMessage;
        }
    }
}