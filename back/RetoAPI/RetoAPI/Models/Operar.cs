using System;
using System.Collections.Generic;

namespace RetoAPI.Models
{
    public class Operar
    {
        public Arreglo OrdenarMenorMayor(Arreglo arreglo)
        {
            Array.Sort(arreglo.ListaNumeros);
            return arreglo;
        }
        public Arreglo OrdenarMayorMenor(Arreglo arreglo)
        {
            Array.Sort(arreglo.ListaNumeros);
            Array.Reverse(arreglo.ListaNumeros);
            return arreglo;
        }
        public int SumaTodos(Arreglo arreglo)
        {
            int Suma = 0;
            foreach (var num in arreglo.ListaNumeros)
            {
                Suma += num;
            }
            return Suma;
        }
        public Arreglo Multiplicar(Arreglo arreglo)
        {
            List<int> list = new List<int>();
            foreach (int num in arreglo.ListaNumeros)
            {
                list.Add(num * num);
            }
            arreglo.ListaNumeros = list.ToArray();
            return arreglo;
        }
    }
}
