using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ControlEscolar.Models.Entidades
{
    public class C_Materia
    {
        public int Id { get; set; }
        public String Nombre { get; set; }
        public C_Carrera Carrera { get; set; }
        public C_Area Area { get; set; }
    }

    /*public class T_Materia
    {
        public int Id { get; set; }
        public String Nombre { get; set; }
        public String Carrera { get; set; }
        public String Nivel { get; set; }
        public String Area { get; set; }

    }*/
    public class C_Area
    {
        public int Id { get; set; }
        public String Nombre { get; set; }
    }
    public class C_Carrera
    {
        public int Id { get; set; }
        public String Nombre { get; set; }
        public String Nivel { get; set; }
    }
}