// Função para mostrar/ocultar detalhes da seção
function toggleDetails(sectionId) {
    const sectionDetails = document.getElementById(sectionId);
    const button = document.getElementById(`show${sectionId.replace('Features', '')}` );

    if (sectionDetails.classList.contains('hidden')) {
        sectionDetails.classList.remove('hidden');
        button.textContent = 'Ocultar';
    } else {
        sectionDetails.classList.add('hidden');
        button.textContent = 'Saiba Mais';
    }
}

// Adicionar event listeners aos botões
document.getElementById('showMorePrecisionFarming').addEventListener('click', () => toggleDetails('precisionFarmingFeatures'));
document.getElementById('showMoreAutomation').addEventListener('click', () => toggleDetails('automationFeatures'));
document.getElementById('showMoreVerticalFarming').addEventListener('click', () => toggleDetails('verticalFarmingFeatures'));
