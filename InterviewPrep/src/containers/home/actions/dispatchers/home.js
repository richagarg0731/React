import { home } from '../creators'

export const initialize = () => {
  return (dispatch, getState) => {
    dispatch(home.setTitle("Home page title"))
    dispatch(home.setContent(
      [
        "Vivamus commodo odio purus, eu porttitor nisl rhoncus ac. Cras lobortis eros nec libero lobortis ullamcorper. Aliquam semper auctor massa, ut hendrerit augue lobortis suscipit. Integer id dictum nunc, at fermentum leo. Donec commodo leo arcu, a elementum erat aliquam sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin lacinia ultrices lorem non luctus. Curabitur finibus, ligula ac facilisis ornare, nunc nibh vehicula ex, id egestas nisl mi ut felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        "Nam convallis lacinia arcu. Aenean quis arcu est. Aliquam sollicitudin quam felis, id pellentesque nisi pharetra a. Nam nec aliquam mauris, ac molestie sapien. Praesent placerat nulla efficitur dictum rhoncus. Aliquam non euismod lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus tincidunt mi, non vestibulum erat sagittis in. Integer finibus dignissim ligula, non imperdiet nibh cursus non. Aliquam tincidunt sapien mauris, non fringilla urna feugiat non.",
        "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer eget pellentesque lacus. Vivamus efficitur felis laoreet, eleifend lorem a, condimentum neque. Sed non velit sed erat hendrerit iaculis vel ac ex. Ut varius rutrum turpis nec placerat. Donec et facilisis enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, enim et blandit convallis, erat dui maximus nibh, a pretium velit est vestibulum nisi. Ut rutrum auctor scelerisque. Integer tempor non mauris ut congue. Proin nec odio ac ligula ultrices vulputate. Nam lacinia dictum volutpat. Vestibulum vehicula metus est, in scelerisque turpis scelerisque non."
      ]
    ))
  }
}

export const flush = () => {
  return (dispatch, getState) => {
    dispatch(home.reset())
  }
}

export const dispatchers ={
  initialize,
  flush
}
