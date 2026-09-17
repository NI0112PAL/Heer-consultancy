(function () {
  'use strict';

  const downloadableForms = [
    {
      id: 'tan-135',
      badge: { en: 'TAN', gu: 'TAN' },
      title: { en: 'Form No. 135', gu: 'ફોર્મ નં. 135' },
      subtitle: { en: 'TAN Application – Non-Government Entity', gu: 'TAN અરજી – Non-Government Entity' },
      description: {
        en: 'Application for allotment of Tax Deduction and Collection Account Number (TAN) for a person other than a Government entity.',
        gu: 'Non-Government Entity માટે TAN મેળવવા માટેનું અરજી ફોર્મ.'
      },
      file: 'assets/forms/form-135-tan-non-government.pdf'
    },
    {
      id: 'pan-correction-individual',
      badge: { en: 'PAN Correction', gu: 'PAN સુધારો' },
      title: { en: 'PAN Correction Form', gu: 'PAN સુધારા ફોર્મ' },
      subtitle: { en: 'For Individual', gu: 'વ્યક્તિ માટે' },
      description: {
        en: 'Request form for changes or corrections in PAN data for individual applicants.',
        gu: 'વ્યક્તિગત અરજદારના PAN ડેટામાં ફેરફાર અથવા સુધારા માટેનું ફોર્મ.'
      },
      file: 'assets/forms/pan-correction-individual.pdf'
    },
    {
      id: 'pan-correction-non-individual',
      badge: { en: 'PAN Correction', gu: 'PAN સુધારો' },
      title: { en: 'PAN Correction Form', gu: 'PAN સુધારા ફોર્મ' },
      subtitle: { en: 'For Non-Individual', gu: 'Non-Individual માટે' },
      description: {
        en: 'Request form for changes or corrections in PAN data for companies, firms, LLPs and other non-individual applicants.',
        gu: 'કંપની, ફર્મ, LLP અને અન્ય Non-Individual અરજદારોના PAN ડેટામાં ફેરફાર અથવા સુધારા માટેનું ફોર્મ.'
      },
      file: 'assets/forms/pan-correction-non-individual.pdf'
    },
    {
      id: 'pan-form-93',
      badge: { en: 'New PAN', gu: 'નવું PAN' },
      title: { en: 'Form No. 93', gu: 'ફોર્મ નં. 93' },
      subtitle: { en: 'New PAN – Individual', gu: 'નવું PAN – વ્યક્તિ માટે' },
      description: {
        en: 'Application for allotment of a Permanent Account Number for an individual who is a citizen of India.',
        gu: 'ભારતીય નાગરિક એવા વ્યક્તિ માટે નવા PANની અરજીનું ફોર્મ.'
      },
      file: 'assets/forms/form-93-new-pan-individual.pdf'
    },
    {
      id: 'pan-form-94',
      badge: { en: 'New PAN', gu: 'નવું PAN' },
      title: { en: 'Form No. 94', gu: 'ફોર્મ નં. 94' },
      subtitle: { en: 'New PAN – Company / Entity', gu: 'નવું PAN – કંપની / Entity' },
      description: {
        en: 'Application for allotment of Permanent Account Number for an Indian company, entity incorporated in India or unincorporated entity formed in India.',
        gu: 'ભારતમાં રચાયેલ કંપની, સંસ્થા અથવા અન્ય Entity માટે નવા PANની અરજીનું ફોર્મ.'
      },
      file: 'assets/forms/form-94-new-pan-entity.pdf'
    }
  ];

  const language = () => window.HeerI18n?.currentLanguage() || 'en';
  const translate = (key) => window.HeerI18n?.t(key) || key;
  const ariaLabel = (key, title) => translate(key).replace('{title}', title);

  function cardTemplate(form, index) {
    const lang = language();
    const title = form.title[lang];

    return `<article class="pdf-form-card" data-form-id="${form.id}" data-aos="fade-up" data-aos-delay="${index * 80}">
      <div class="form-card-top">
        <span class="form-type-badge">${form.badge[lang]}</span>
        <span class="form-pdf-icon" aria-hidden="true"><i class="bi bi-file-earmark-text"></i><span>PDF</span></span>
      </div>
      <h3>${title}</h3>
      <p class="form-card-subtitle">${form.subtitle[lang]}</p>
      <p class="form-card-description">${form.description[lang]}</p>
      <span class="form-document-label"><i class="bi bi-filetype-pdf" aria-hidden="true"></i>${translate('downloads.document')}</span>
      <div class="form-card-actions">
        <a class="btn form-view-btn" href="${form.file}" target="_blank" rel="noopener noreferrer" aria-label="${ariaLabel('downloads.viewAria', title)}"><i class="bi bi-eye" aria-hidden="true"></i>${translate('downloads.view')}</a>
        <a class="btn form-download-btn" href="${form.file}" download aria-label="${ariaLabel('downloads.downloadAria', title)}" data-form-download="${form.id}"><i class="bi bi-download" aria-hidden="true"></i>${translate('downloads.download')}</a>
      </div>
    </article>`;
  }

  function renderForms() {
    const grid = document.querySelector('#forms-grid');
    if (!grid) return;
    grid.innerHTML = downloadableForms.map(cardTemplate).join('');
    grid.querySelectorAll('[data-form-download]').forEach((link) => {
      link.addEventListener('click', () => window.trackFormDownload(link.dataset.formDownload));
    });
    if (window.AOS) window.AOS.refreshHard();
  }

  window.downloadableForms = downloadableForms;
  window.trackFormDownload = function (formId) { void formId; };

  document.addEventListener('DOMContentLoaded', renderForms);
  document.addEventListener('languagechange', renderForms);
})();
