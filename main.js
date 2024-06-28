// Selecionar os elementos da página
const precisionFarmingFeatures = document.getElementById('precisionFarmingFeatures');
const automationFeatures = document.getElementById('automationFeatures');
const verticalFarmingFeatures = document.getElementById('verticalFarmingFeatures');

// Função para criar um elemento de lista com um ícone
function createListItem(icon, text) {
  const listItem = document.createElement('li');
  const iconElement = document.createElement('i');
  iconElement.classList.add(icon);
  const textElement = document.createElement('span');
  textElement.textContent = text;
  listItem.appendChild(iconElement);
  listItem.appendChild(textElement);
  return listItem;
}

// Adicionar os itens de lista com ícones
precisionFarmingFeatures.appendChild(createListItem('fas fa-map-marker-alt', 'Mapeamento de solo e variabilidade de campo'));
precisionFarmingFeatures.appendChild(createListItem('fas fa-tractor', 'Aplicação variável de insumos'));
precisionFarmingFeatures.appendChild(createListItem('fas fa-camera', 'Monitoramento de culturas'));

automationFeatures.appendChild(createListItem('fas fa-robot', 'Colheitadeiras autônomas'));
automationFeatures.appendChild(createListItem('fas fa-tractor', 'Tratores e pulverizadores robóticos'));
automationFeatures.appendChild(createListItem('fas fa-sprinkler', 'Sistemas de irrigação automatizados'));

verticalFarmingFeatures.appendChild(createListItem('fas fa-greenhouse', 'Cultivo em estufas e fazendas verticais'));
verticalFarmingFeatures.appendChild(createListItem('fas fa-water', 'Sistemas hidropônicos e aeropônicos'));
verticalFarmingFeatures.appendChild(createListItem('fas fa-thermometer', 'Monitoramento e controle ambiental'));
