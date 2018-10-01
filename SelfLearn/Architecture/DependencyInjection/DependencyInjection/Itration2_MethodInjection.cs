using System;

namespace DependencyInjection4
{
    class MethodInjection
    {
        static void Main(string[] args) {
            //Creating Object
            Service1 s1 = new Service1();
            Client c1 = new Client();
            //Method Injection
            c1.Start(s1);

            //Creating Object
            Service2 s2 = new Service2();
            Client c2 = new Client();
            //Method Injection
            c2.Start(s2);

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
        public void Start(IService srv) {
            Console.WriteLine("Client Started.. Going to call _service.Serve");
            srv.Serve();
        }
    }
}
