using System;

namespace DependencyInjection1
{
    class Itration1
    {
        static void Main(string[] args)
        {
            Client _client = new Client(new Service());
            _client.Start();
            Console.ReadLine();
        }
    }
    public interface IService
    {
        void Serve();
    }
    public class Service : IService
    {
        public void Serve()
        {
            Console.WriteLine("Serve started inside Service");
        }
    }
    /*
    public static class LocateService
    {
        public static IService _service { get; set; }
        public static IService GetService()
        {
            if (_service == null) _service = new Service();
            return _service;
        }
    }*/
    public class Client
    {
        private IService _service;
        public Client(IService srv)
        {
            this._service = srv;
        }
        public void Start()
        {
            Console.WriteLine("Service Started");
            _service.Serve();
        }
    }
}
