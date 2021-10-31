function createElement(elementModel) {
    return async function (req, res) {
        try {
            let element = await elementModel.create(req.body);
            res.status(200).json({
                element: element
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "Server error"
            });
        }
    }
}

function getElement(elementModel) {
    return async function (req, res) {
        try {
            let { id } = req.params;
            let element = await elementModel.findById(id);
            res.status(200).json({
                element: element,
            })

        } catch (err) {
            res.status(404).json({
                message: err.message,
            })
        }
    }
}

function deleteElement(elementModel) {
    return async function (req, res) {
        try {
            let { id } = req.params;
            let element = await elementModel.findByIdAndDelete(id);
            res.status(200).json({
                element: element,
            })

        } catch (err) {
            res.status(404).json({
                message: err.message,
            })
        }
    }
}

module.exports.createElement = createElement;
module.exports.getElement = getElement;
module.exports.deleteElement = deleteElement;