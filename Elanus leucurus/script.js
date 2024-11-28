
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};

const modelViewer = document.querySelector('#ave');
document.querySelector('model-viewer').addEventListener('progress', onProgress);
document.querySelector('#cambioAnimation').onclick = function(){
  animationChange()
}

document.querySelector('#cambioAnimation').ontouchstart = function(){
  animationChange()
}

function animationChange(){
  modelViewer.animationName = modelViewer.animationName === 'Idle' ?
      'Vuelo' : 'Idle';
}