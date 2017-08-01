using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Firebase.NET;
using Firebase.NET.Contracts;
using Firebase.NET.Messages;
using Firebase.NET.Notifications;


namespace Firebase
{
    public class Notification
    {
        public static bool Update(string oldToken, string newToken)
        {
            //update oldToken with newToken in your database
            return true;
        }

        public static bool Delete(string oldToken)
        {
            //delete oldToken from your database
            return true;
        }

        //static readonly Func<string, string, bool> updateFunc = Update;
        //static readonly Func<string, bool> deleteFunc = Delete;
        PushNotificationService pushService = new PushNotificationService("yourFcmServerKey", Update, Delete);
        
        //registration tokens here 
        private readonly string[] ids = { };

        public async Task SendMessageAsync()
        {
            var requestMessage = new RequestMessage
            {
                Body =
                {
                    RegistrationIds = ids,
                    Notification = new CrossPlatformNotification
                    {
                        Title = "Important Notification",
                        Body = "This is a notification send from Firebase.NET"
                        //other available pre-defined properties such as badge, icon, sound etc
                    },
                    Data = (IPayload) new Dictionary<string, string>
                    {
                        {"leage", "UEFA"},
                        {"game", "Albania vs Kosovo!"},
                        {"score", "1:1"}
                    }
                }
            };
            await pushService.PushMessage(requestMessage);
        }
    }
}
