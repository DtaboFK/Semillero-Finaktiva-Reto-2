using Microsoft.AspNetCore.Mvc;
using RetoAPI.Models;

namespace RetoAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ArregloController : Controller
    {
        Arreglo ObjArreglo = new Arreglo();
        Operar ObjOperar = new Operar();
        [HttpPost]
        [Route("OrdenarDSC")]
        public Arreglo OrdenarMenorMayor(Arreglo arreglo)
        {
            arreglo = ObjOperar.OrdenarMenorMayor(arreglo);
            return arreglo;
        }

        [HttpPost]
        [Route("OrdenarASC")]
        public Arreglo OrdenarMayorMenor(Arreglo arreglo)
        {
            arreglo = ObjOperar.OrdenarMayorMenor(arreglo);
            return arreglo;
        }

        [HttpPost]
        [Route("Suma")]
        public int SumarTodos(Arreglo arreglo)
        {
            int result = ObjOperar.SumaTodos(arreglo);
            return result;
        }

        [HttpPost]
        [Route("Multiplicar")]
        public Arreglo MultiplicarArray(Arreglo arreglo)
        {
            arreglo = ObjOperar.Multiplicar(arreglo);
            return arreglo;
        }
    }
}
