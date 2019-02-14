export class SafeDelay {
    public static async delay() {
        await new Promise(resolve => setTimeout(()=>resolve(), 2000)).then(()=>console.log("fired"));
    }
}