import * as PIXI from 'pixi.js-legacy';

export type PanMoveEvent = {
  deltaX: number,
  deltaY: number,
  velocity: number,
  data: PIXI.FederatedPointerEvent
};

export default function panable(
  sprite: PIXI.DisplayObject,
  inertia: boolean = false
) {
  function pointerDown(e: PIXI.FederatedPointerEvent) {
// @ts-expect-error - TS2345 - Argument of type 'MouseEvent | PointerEvent | PixiTouch' is not assignable to parameter of type 'Touch'.
    start(e.data.originalEvent.nativeEvent);
  }

  function start(t: Touch) {
// @ts-expect-error - TS2339 - Property '_pan' does not exist on type 'DisplayObject'.
    if (sprite._pan) {
// @ts-expect-error - TS2339 - Property '_pan' does not exist on type 'DisplayObject'.
      if (!sprite._pan.intervalId) {
        return;
      }
// @ts-expect-error - TS2339 - Property '_pan' does not exist on type 'DisplayObject'.
      clearInterval(sprite._pan.intervalId);
      sprite.emit('panend');
    }
// @ts-expect-error - TS2339 - Property '_pan' does not exist on type 'DisplayObject'.
    sprite._pan = {
      p: {
        x: t.clientX,
        y: t.clientY,
        date: new Date(),
      },
    };
    sprite.addEventListener('globalpointermove', pointerMove);
  }

  function pointerMove(e: PIXI.FederatedPointerEvent) {
    let touch = e.data.originalEvent.nativeEvent;
    if (!e.data.isPrimary) {
// @ts-expect-error - TS2345 - Argument of type 'MouseEvent | PointerEvent | PixiTouch' is not assignable to parameter of type 'Touch'.
      end(e, touch);
      return;
    }
// @ts-expect-error - TS2345 - Argument of type 'MouseEvent | PointerEvent | PixiTouch' is not assignable to parameter of type 'Touch'.
    move(e, touch);
  }

  function move(e: PIXI.FederatedPointerEvent, t: Touch) {
    let now = new Date();
// @ts-expect-error - TS2362 - The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type. | TS2339 - Property '_pan' does not exist on type 'DisplayObject'.
    let interval = now - sprite._pan.p.date;
    if (interval < 12) {
      return;
    }
// @ts-expect-error - TS2339 - Property '_pan' does not exist on type 'DisplayObject'.
    let dx = t.clientX - sprite._pan.p.x;
// @ts-expect-error - TS2339 - Property '_pan' does not exist on type 'DisplayObject'.
    let dy = t.clientY - sprite._pan.p.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
// @ts-expect-error - TS2339 - Property '_pan' does not exist on type 'DisplayObject'.
    if (!sprite._pan.pp) {
      let threshold = t instanceof window.MouseEvent ? 2 : 7;
      if (distance > threshold) {
        sprite.emit('panstart');
      } else {
        return;
      }
    } else {
      let event: PanMoveEvent = {
        deltaX: dx,
        deltaY: dy,
        velocity: distance / interval,
        data: e.data,
      };
      sprite.emit('panmove', event);
    }
// @ts-expect-error - TS2339 - Property '_pan' does not exist on type 'DisplayObject'.
    sprite._pan.pp = {
// @ts-expect-error - TS2339 - Property '_pan' does not exist on type 'DisplayObject'.
      x: sprite._pan.p.x,
// @ts-expect-error - TS2339 - Property '_pan' does not exist on type 'DisplayObject'.
      y: sprite._pan.p.y,
// @ts-expect-error - TS2339 - Property '_pan' does not exist on type 'DisplayObject'.
      date: sprite._pan.p.date,
    };
// @ts-expect-error - TS2339 - Property '_pan' does not exist on type 'DisplayObject'.
    sprite._pan.p = {
      x: t.clientX,
      y: t.clientY,
      date: now,
    };
  }

  function pointerUp(e: PIXI.FederatedPointerEvent) {
// @ts-expect-error - TS2345 - Argument of type 'MouseEvent | PointerEvent | PixiTouch' is not assignable to parameter of type 'Touch'.
    end(e, e.data.originalEvent.nativeEvent);
  }

  function end(e: PIXI.FederatedPointerEvent, t: Touch) {
    sprite.removeEventListener('globalpointermove', pointerMove);
// @ts-expect-error - TS2339 - Property '_pan' does not exist on type 'DisplayObject'. | TS2339 - Property '_pan' does not exist on type 'DisplayObject'.
    if (!sprite._pan || !sprite._pan.pp) {
// @ts-expect-error - TS2339 - Property '_pan' does not exist on type 'DisplayObject'.
      sprite._pan = null;
      return;
    }
    if (inertia && t) {
// @ts-expect-error - TS2339 - Property '_pan' does not exist on type 'DisplayObject'.
      if (sprite._pan.intervalId) {
        return;
      }
// @ts-expect-error - TS2362 - The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type. | TS2339 - Property '_pan' does not exist on type 'DisplayObject'.
      let interval = new Date() - sprite._pan.pp.date;
// @ts-expect-error - TS2339 - Property '_pan' does not exist on type 'DisplayObject'.
      let vx = (t.clientX - sprite._pan.pp.x) / interval;
// @ts-expect-error - TS2339 - Property '_pan' does not exist on type 'DisplayObject'.
      let vy = (t.clientY - sprite._pan.pp.y) / interval;
// @ts-expect-error - TS2339 - Property '_pan' does not exist on type 'DisplayObject'.
      sprite._pan.intervalId = setInterval(() => {
        if (Math.abs(vx) < 0.04 && Math.abs(vy) < 0.04) {
// @ts-expect-error - TS2339 - Property '_pan' does not exist on type 'DisplayObject'.
          clearInterval(sprite._pan.intervalId);
          sprite.emit('panend');
// @ts-expect-error - TS2339 - Property '_pan' does not exist on type 'DisplayObject'.
          sprite._pan = null;
          return;
        }
        let touch = {
// @ts-expect-error - TS2339 - Property '_pan' does not exist on type 'DisplayObject'.
          clientX: sprite._pan.p.x + vx * 12,
// @ts-expect-error - TS2339 - Property '_pan' does not exist on type 'DisplayObject'.
          clientY: sprite._pan.p.y + vy * 12,
        };
// @ts-expect-error - TS2345 - Argument of type '{ clientX: any; clientY: any; }' is not assignable to parameter of type 'Touch'.
        move(e, touch);
        vx *= 0.9;
        vy *= 0.9;
      }, 12);
    } else {
      sprite.emit('panend');
// @ts-expect-error - TS2339 - Property '_pan' does not exist on type 'DisplayObject'.
      sprite._pan = null;
    }
  }

  sprite.eventMode = 'static';
  sprite.addEventListener('pointerdown', pointerDown);
  sprite.addEventListener('pointerup', pointerUp);
  sprite.addEventListener('pointerupoutside', pointerUp);
}
