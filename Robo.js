const { waitForDebugger } = require('inspector');
const { remote , Key} = require('webdriverio');


class WebdriverIO {

    async start() {
        global.browser = await remote({
            capabilities: {
                browserName: 'chrome',
                'goog:chromeOptions': {
                    args: process.env.CI ? ['headless', 'disable-gpu'] : []
                }
            }
        });
    }

    async execute() {
        await this.start();
        await this.open();
        await browser.pause(5000);
        await this.end();
    }
    
    async open() {
        
        await browser.url('https://www.google.com/')
        const googleInput = await browser.$('.gLFyf');
        await googleInput.setValue("temperatura Alpestre");
        await browser.keys([Key.Enter]);
        const info = await browser.$('.UQt4rd');
        const tempAtualC = await info.$('#wob_tm').getText();
        const weather = await browser.$('.VQF4g').getText();
        const addInfo = await info.$('.wtsRwe').getText();
        await console.log(` Temperatura em Graus Celsius : ` + tempAtualC);
        await console.log(weather);
        await browser.url('https://web.whatsapp.com/')
        await browser.$('#pane-side').waitForExist({interval:5000 , timeout:60000})
        const listaDeConversas = await browser.$('#pane-side')
        const qtdUsers = await listaDeConversas.$$('._8nE1Y')
        console.log(qtdUsers.lenght);
        const WAInput = await browser.$('.iq0m558w')
        await WAInput.click()
        await WAInput.setValue('Regis')
        await browser.keys([Key.Enter]);
        const WAInput2 = await browser.$("._1VZX7").$('.iq0m558w')

        await WAInput2.click()
        await WAInput2.setValue("Temperatura em Graus Celsius: " + tempAtualC)
        await browser.keys([Key.Enter]);

        await WAInput2.click()
        await WAInput2.setValue(weather)
        await browser.keys([Key.Enter]);

        await WAInput2.click()
        await WAInput2.setValue(addInfo)
        await browser.keys([Key.Enter]);
        
        


        }        



    async end() {
        await browser.deleteSession();
    }
}

module.exports = WebdriverIO;