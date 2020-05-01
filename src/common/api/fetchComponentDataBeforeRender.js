/**
* Delays Server Side Rendering Until the API calls have finished, creating a smoother loading process
*/

export function fetchComponentDataBeforeRender(dispatch, components, params) {
  const needs = components.reduce( (prev, current) => {
    return (current.need || [])
      .concat((current.WrappedComponent ? current.WrappedComponent.need : []) || [])
      .concat(prev);
    }, []);
    const promises = needs.map(need => dispatch(need()));
    return Promise.all(promises);
}