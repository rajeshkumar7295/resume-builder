import React from 'react';
import { useParams } from 'react-router-dom';
import Template1 from '../components/template/Template1';
import Template2 from '../components/template/Template2';
import Template3 from '../components/template/Template3';
import Template4 from '../components/template/Template4';
import Template5 from '../components/template/Template5';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
const Preview = () => {

  const params = useParams();
  const { templateId } = params;
  const handleDownload = () => {
    const input = document.getElementById('resume-content');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      
      pdf.save('resume.pdf');
    });
  };
  return (
    <div className='flex gap-8 justify-center items-center'>

    <div id='resume-content'>
      {
        templateId === '1' && <Template1 />
      }
      {
        templateId === '2' && <Template2 />
      }
      {
        templateId === '3' && <Template3 />

      }

      {
        templateId === '4' && <Template4  />
      }
       
      {
        templateId=== '5' && <Template5 />
      }   
    </div>
    <button className='px-3 bg-blue-500 text-white py-1' onClick={handleDownload}>Download Resume</button>
    </div>
  )
}

export default Preview
