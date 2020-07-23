const tasks = arr => arr.join(' && ')

module.exports = {
  hooks: {
    'pre-commit': tasks(['echo "Hello from shell!"', 'git add .', 'lint-staged']),
    'commit-msg': tasks(['commitlint -E HUSKY_GIT_PARAMS']),
  },
}
