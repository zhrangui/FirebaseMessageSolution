namespace FirebaseMessage
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            var notification = new FirebaseNotification();
            var taskTopic = notification.SendTopicNotification("TD");
            taskTopic.Wait();
            string[] ids =
            {
                "dyeLmmMOVTI:APA91bFUe8ijvLSnQgY2RqdYFpYntcs3eFCwOCsBWHPnIGzCWkzwYETy7ujHn917HDJjsU2G7ZyuTKaI-LL23vfWry5KStVZWC8ESQYu27MvbVDGBpytQah7CkOqqQ5Fc5TKZRTKyaxa"
            };
            var task = notification.SendNotification(ids);
            task.Wait();
        }
    }
}