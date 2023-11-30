using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OEEInterfacr.Models
{
    public class Machine
    {
        public int pkint_Machine { get; set; }
        public string ch_name { get; set; }

        public string ch_shortname { get; set; }

        public string ch_ulogin { get; set; }

        public string ch_usession { get; set; }
    }
}
