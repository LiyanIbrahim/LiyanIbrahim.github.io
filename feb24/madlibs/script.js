function redirectToGenre(genre) {
  window.location.href = `${genre}.html`;
}



function generateStory(genre) {
  // Horror
    const townName = document.getElementById('townName').value;
  const noun = document.getElementById('noun').value;
    const adjective = document.getElementById('adjective').value;
  const name = document.getElementById('name').value;
    const season = document.getElementById('season').value;
  const number = document.getElementById('number').value;
  const occupation = document.getElementById('occupation').value;
  const adjective2 = document.getElementById('adjective2').value;
  const creepy = document.getElementById('creepy').value;
  const atmosphere = document.getElementById('atmosphere').value;
    const adjective3 = document.getElementById('adjective3').value;
  const room = document.getElementById('room').value;
  const number2 = document.getElementById('number2').value;
  const object = document.getElementById('object').value;
      const adjective4 = document.getElementById('adjective4').value;
  const action = document.getElementById('action').value;
  const object2 = document.getElementById('object2').value;
  const adjective5 = document.getElementById('adjective5').value;

//   //Comedy 
// const townName2 = document.getElementById('townName2').value;
//   const noun2 = document.getElementById('noun2').value;
//     const adjective6 = document.getElementById('adjective6').value;
//   const number3 = document.getElementById('number3').value;
//     const occupation2 = document.getElementById('occupation2').value;
//  const adjective7 = document.getElementById('adjective7').value;
//     const adjective8 = document.getElementById('adjective8').value;
//      const location = document.getElementById('location').value;
//     const number4 = document.getElementById('number4').value;
//          const object3 = document.getElementById('object3').value;
//     const liquid = document.getElementById('liquid').value;
//      const action2 = document.getElementById('action2').value;
//           const element = document.getElementById('element').value;
//           const object4 = document.getElementById('object4').value;
//                  const color = document.getElementById('color').value;
//                     const adjective9 = document.getElementById('adjective9').value;

  const stories = {
    horror: `In ${townName}, a ${adjective} ${noun} house whispered with echoes of ${name}. 
One ${season}, a group of ${number} ${occupation} explored its ${adjective2} halls, chilled by ${creepy} ${atmosphere}. Exploring the inn, they discovered a ${adjective3} ${room} filled with ${number2} quirky ${object}. The innkeeper joined in, delivering a punchline that set off a cascade of ${adjective4} hilarity. To break the curse, they ${action} with ${object2}, emerging at dawn, forever changed by the ${adjective5} horrors.`,
    comedy: ``


  };

  const storyOutput = document.getElementById('storyOutput');
  storyOutput.innerHTML = `<p>${stories[genre]}</p>`;
}