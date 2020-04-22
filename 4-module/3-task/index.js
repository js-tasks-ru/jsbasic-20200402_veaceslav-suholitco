const FIRST_COLUMN = 1;
const SECOND_COLUMN = 2;
const THIRD_COLUMN = 3;
<<<<<<< HEAD
=======

>>>>>>> 47dec809e1bc20866455ef66092868dbc402ef27
/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
<<<<<<< HEAD
    const actions = {
        [THIRD_COLUMN]: (root, td) => {
          if (td.dataset.available === 'true') {
            root.classList.toggle('available', true);
          } else if (td.dataset.available === 'false') {
            root.classList.toggle('unavailable', true);
          } else if (!td.hasAttribute('data-available')) {
            root.hidden = true;
          }
        },
        [SECOND_COLUMN]: (root, td) => {
          if (td.textContent === 'm') {
            root.classList.toggle('male', true);
          } else if (td.textContent === 'f') {
            root.classList.toggle('female', true);
          }
        },
        [FIRST_COLUMN]: (root, td) => {
          const age = parseInt(td.textContent, 10);
    
          if (age < 18) {
            root.style.textDecoration = 'line-through';
          }
        },
      };
    
      for (const tr of table.rows) {
        Array.from(tr.cells).forEach((td, index) => {
          const fn = actions[index];
    
          if (typeof fn === 'function') {
            fn(tr, td);
          }
        });
      }
=======
  const actions = {
    [THIRD_COLUMN]: (root, td) => {
      if (td.dataset.available === 'true') {
        root.classList.toggle('available', true);
      } else if (td.dataset.available === 'false') {
        root.classList.toggle('unavailable', true);
      } else if (!td.hasAttribute('data-available')) {
        root.hidden = true;
      }
    },
    [SECOND_COLUMN]: (root, td) => {
      if (td.textContent === 'm') {
        root.classList.toggle('male', true);
      } else if (td.textContent === 'f') {
        root.classList.toggle('female', true);
      }
    },
    [FIRST_COLUMN]: (root, td) => {
      const age = parseInt(td.textContent, 10);

      if (age < 18) {
        root.style.textDecoration = 'line-through';
      }
    },
  };

  for (const tr of table.rows) {
    Array.from(tr.cells).forEach((td, index) => {
      const fn = actions[index];

      if (typeof fn === 'function') {
        fn(tr, td);
      }
    });
  }
>>>>>>> 47dec809e1bc20866455ef66092868dbc402ef27
}

