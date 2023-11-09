// controllers/profile.js
const profileModel = require('../../models/profile/profile');

router.get('/:id', async function (req, res) {
  const id = req.params.id;

  try {
    const profileData = await profileModel.getProfileById(id);
    res.json(profileData);
  } catch (error) {
    console.error('Erro ao buscar o usuário:', error);
    res.status(500).send('Erro ao buscar o usuário!');
  }
});

module.exports = router;
