import {
	TLBookmarkShape,
	TLEmbedShape,
	TLGroupShape,
	TLImageShape,
	TLTextShape,
	TLVideoShape,
} from '@tldraw/tlschema'
import { arrowShape } from '../editor/shapes/ArrowShape/arrowShape'
import { drawShape } from '../editor/shapes/DrawShape/drawShape'
import { frameShape } from '../editor/shapes/FrameShape/frameShape'
import { geoShape } from '../editor/shapes/GeoShape/geoShape'
import { highlightShape } from '../editor/shapes/HighlightShape/highlightShape'
import { lineShape } from '../editor/shapes/LineShape/lineShape'
import { noteShape } from '../editor/shapes/NoteShape/noteShape'
import { BookmarkShapeUtil } from '../editor/shapeutils/BookmarkShapeUtil/BookmarkShapeUtil'
import { EmbedShapeUtil } from '../editor/shapeutils/EmbedShapeUtil/EmbedShapeUtil'
import { GroupShapeUtil } from '../editor/shapeutils/GroupShapeUtil/GroupShapeUtil'
import { ImageShapeUtil } from '../editor/shapeutils/ImageShapeUtil/ImageShapeUtil'
import { TextShapeUtil } from '../editor/shapeutils/TextShapeUtil/TextShapeUtil'
import { VideoShapeUtil } from '../editor/shapeutils/VideoShapeUtil/VideoShapeUtil'
import { TLShapeInfo, createShape } from './createShape'

/** @public */
export const coreShapes: Record<string, TLShapeInfo<any>> = {
	// created by grouping interactions, probably the corest core shape that we have
	group: createShape<TLGroupShape>({
		util: GroupShapeUtil,
	}),
	// created by embed menu / url drop
	embed: createShape<TLEmbedShape>({
		util: EmbedShapeUtil,
	}),
	// created by copy and paste / url drop
	bookmark: createShape<TLBookmarkShape>({
		util: BookmarkShapeUtil,
	}),
	// created by copy and paste / file drop
	image: createShape<TLImageShape>({
		util: ImageShapeUtil,
	}),
	// created by copy and paste / file drop
	video: createShape<TLVideoShape>({
		util: VideoShapeUtil,
	}),
	// created by copy and paste
	text: createShape<TLTextShape>({
		util: TextShapeUtil,
	}),
}

/** @public */
export const defaultShapes: Record<string, TLShapeInfo<any>> = {
	draw: drawShape,
	arrow: arrowShape,
	highlight: highlightShape,
	geo: geoShape,
	line: lineShape,
	note: noteShape,
	frame: frameShape,
}