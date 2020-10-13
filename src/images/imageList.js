const importAll = (r) => {
	return r.keys().map(r)
}

const images = importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/))

const imageList = images.map((image) => {
	return { title: image, img: image }
})

export default imageList
