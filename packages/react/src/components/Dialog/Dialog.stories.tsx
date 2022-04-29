import { BoxCentered } from '../BoxCentered'
import { Button } from '../Button'
import { Dialog } from './Dialog'

export default {
  component: Dialog,
  title: 'Overlay/Dialog',
  layout: 'fullscreen',
}

export const Usage = () => {
  return (
    <BoxCentered minHS minWS>
      <Dialog>
        <Dialog.Trigger>
          <Button>Open</Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Heading>Hello World</Dialog.Heading>
          <Dialog.Description>
            Just a big text with a nice description here
          </Dialog.Description>
          <Dialog.Footer>
            <Dialog.Close>
              <Button size="sm" variant="ghost" color="tomato">
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button size="sm">Save</Button>
            </Dialog.Close>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </BoxCentered>
  )
}