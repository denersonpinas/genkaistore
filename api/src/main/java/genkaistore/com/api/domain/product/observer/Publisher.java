package genkaistore.com.api.domain.product.observer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class Publisher {
    @Autowired
    private List<ObserverNotification> observerNotificationList;

    public void subscribe(ObserverNotification observerNotification) {
        observerNotificationList.add(observerNotification);
    }

    public void unSubscribe(ObserverNotification observerNotification) {
        observerNotificationList.remove(observerNotification);
    }

    public void notifyObserver(Long idProduct) {
        for (ObserverNotification observerNotification : observerNotificationList) {
            observerNotification.update(idProduct);
        }
    }
}
