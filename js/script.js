document.addEventListener('DOMContentLoaded', () => {
   const tabs = document.querySelectorAll('.tab-btn');
   const previewFrame = document.getElementById('cv-preview');
   const downloadBtn = document.getElementById('download-btn');

   // Configuration for the two CV versions
   const cvData = {
      es: {
         file: 'CV_Franz_Aguilar_ES.pdf',
         label: 'Descargar CV (Español)'
      },
      en: {
         file: 'CV_Franz_Aguilar_EN.pdf',
         label: 'Download CV (English)'
      }
   };

   tabs.forEach(tab => {
      tab.addEventListener('click', () => {
         // Remove active class from all tabs
         tabs.forEach(t => t.classList.remove('active'));
         // Add active class to clicked tab
         tab.classList.add('active');

         const lang = tab.getAttribute('data-lang');
         const data = cvData[lang];

         // Update Preview
         // We append #toolbar=0&navpanes=0 to clean up the PDF view if possible in some browsers
         previewFrame.src = `${data.file}#view=FitH`;

         // Update Download Button
         downloadBtn.href = data.file;
         downloadBtn.download = data.file;
         downloadBtn.textContent = data.label;
      });
   });
});
