
export default {
    getImages: async function() {
        let result = null;
        try {
            result = await fetch('test.json', {
                credentials: "same-origin"
            });
            result = await result.json();
        } catch (e) {
            console.error(e);
        }
        
        (result) && (result = result.data);
        return result;
    }
}