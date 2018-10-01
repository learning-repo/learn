using System;

namespace DependencyInjection3
{
    class PropertyInjection
    {
        static void Main(string[] args) {
            //Creating Object
            Service1 s1 = new Service1();
            Client c1 = new Client();
            //Passing Dependency
            c1.Service = s1;
            c1.Start();

            //Creating Object
            Service2 s2 = new Service2();
            Client c2 = new Client();
            //Passing Dependency
            c2.Service = s2;
            c2.Start();

            Console.ReadLine();
        }
    }
    public interface IService{
        void Serve();
    }
    public class Service1 : IService {
        public void Serve() { Console.WriteLine("Serve started inside Service1"); }
    }
    public class Service2 : IService {
        public void Serve() { Console.WriteLine("Serve started inside Service2"); }
    }
    public class Client
    {
        //private IService _service;
        public IService Service { get; set; }
        public void Start() {
            Console.WriteLine("Client Started.. Going to call _service.Serve");
            this.Service.Serve();
        }
    }
}
