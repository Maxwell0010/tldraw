import { CAMERA_SLIDE_FRICTION, StateNode, TLEventHandlers, Vec } from '@tldraw/editor'

export class Dragging extends StateNode {
	static override id = 'dragging'

	initialCamera = new Vec()

	override onEnter = () => {
		this.initialCamera = Vec.From(this.editor.getCamera())
		this.update()
	}

	override onPointerMove: TLEventHandlers['onPointerMove'] = () => {
		this.update()
	}

	override onPointerUp: TLEventHandlers['onPointerUp'] = () => {
		this.complete()
	}

	override onCancel: TLEventHandlers['onCancel'] = () => {
		this.parent.transition('idle')
	}

	override onComplete = () => {
		this.complete()
	}

	private update() {
		const { initialCamera, editor } = this
		const { currentScreenPoint, originScreenPoint } = editor.inputs

		const delta = Vec.Sub(currentScreenPoint, originScreenPoint).div(editor.getZoomLevel())
		if (delta.len2() === 0) return
		editor.setCamera(initialCamera.clone().add(delta))
	}

	private complete() {
		const { editor } = this
		const { pointerVelocity } = editor.inputs

		const velocityAtPointerUp = Math.min(pointerVelocity.len(), 2)

		if (velocityAtPointerUp > 0.1) {
			this.editor.slideCamera({
				speed: velocityAtPointerUp,
				direction: pointerVelocity,
				friction: CAMERA_SLIDE_FRICTION,
			})
		}

		this.parent.transition('idle')
	}
}
