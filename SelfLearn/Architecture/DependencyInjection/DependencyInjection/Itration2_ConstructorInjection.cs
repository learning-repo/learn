using System;

namespace DependencyInjection2
{
    class Itration2
    {
        static void Main(string[] args) {
            //Creating Object
            Service1 s1 = new Service1();
            //Passing Dependency
            Client c1 = new Client(s1);
            c1.Start();

            //Creating Object
            Service2 s2 = new Service2();
            //Passing Dependency
            Client c2 = new Client(s2);
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
        private IService _service;
        //Constructor
        public Client(IService srv) {
            this._service = srv;
        }
        public void Start() {
            Console.WriteLine("Client Started.. Going to call _service.Serve");
            this._service.Serve();
        }
    }
}
