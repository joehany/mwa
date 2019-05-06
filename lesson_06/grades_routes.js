const router = require('express').Router();
let _grades = [];

router.get('/', (req, res) => {
  res.json(_grades);
});

router.post('/', (req, res) => {
  _grades.push(req.body);
  res.json(req.body);
});

// Find grade by id before all /grades/:id actions
router.route('/:id')
        .all((req, res, next) => {
          req.gradeIndex = _grades.findIndex(g => g.id == req.params.id);
          return next(); 
        })
        .get((req, res) => {
          res.json(_grades[req.gradeIndex]);
        })
        .put((req, res) => {
          _grades[req.gradeIndex] = req.body;
          res.json({ info: 'grade updated successfully' });  
        })
        .delete((req, res) => {
          _grades.splice(req.gradeIndex, 1);
          res.json({ info: 'grade deleted successfully' });  
        });

module.exports = router;
