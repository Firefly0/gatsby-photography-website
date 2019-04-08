const path = require(`path`)
const slash = require(`slash`)

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-bootstrap/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
