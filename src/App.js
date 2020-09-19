import React from 'react';
import logo from './logo.svg';
import './App.css';
import SiswaRPL from './component/siswa/siswaRPL';
import SiswaTKJ from './component/siswa/siswaTKJ';

function App() {
  return (
   <div className="container">
     <h4 className="text-center mb-5">Daftar siswa</h4>
     <div className="row">
       <div className="col-md-6 border">
       <h5 className="text-center mb-5">Siswa RPL</h5>
         <SiswaRPL namaSiswa ={'Damar'} nisnSiswa={'345678987654'}/>
         <SiswaRPL namaSiswa ={'bambank'} nisnSiswa={'67866868577'}/>
         <SiswaRPL namaSiswa ={'bdui'} nisnSiswa={'56778897986'}/>
       </div>
       <div className="col-md-6 border">
       <h5 className="text-center mb-5">Siswa TKJ</h5>
         <SiswaTKJ namaSiswa ={'odang'} nisnSiswa={'345678987654'}/>
         <SiswaTKJ namaSiswa ={'bongga'} nisnSiswa={'67866868577'}/>
         <SiswaTKJ namaSiswa ={'kimchill'} nisnSiswa={'56778897986'}/>
       </div>
     </div>
   </div>
  );
}

export default App;
