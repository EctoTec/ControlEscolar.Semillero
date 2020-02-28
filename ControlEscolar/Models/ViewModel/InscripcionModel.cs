using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ControlEscolar.Models.ViewModel
{
    public class InscripcionModel
    {
        public int IdAlumno { get; set; }
        public int IdMateria { get; set; }
        public String NombreMateria { get; set; }
        public int IdCarrera { get; set; }

        public int IdGpo { get; set; }
    }
}